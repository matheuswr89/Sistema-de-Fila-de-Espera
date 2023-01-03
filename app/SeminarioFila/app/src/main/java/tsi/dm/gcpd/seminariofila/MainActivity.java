package tsi.dm.gcpd.seminariofila;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.provider.Settings;
import android.util.Log;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.TextView;
import android.widget.Toast;

import com.google.firebase.firestore.EventListener;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.FirebaseFirestoreException;
import com.google.firebase.firestore.ListenerRegistration;
import com.google.firebase.firestore.Query.Direction;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import org.json.JSONArray;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private FirebaseFirestore db = FirebaseFirestore.getInstance();
    private final String TAG = "DEBUG TESTE: ";
    private ListenerRegistration listenerSenhas;
    private ListenerRegistration listenerTempo;
    private ListenerRegistration listenerURL;
    MediaPlayer mp = null;
    private List<String> listaSenhas;
    private Long tempoApi;
    private List<String> listaURL;
    public WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // Configura a WebView
        webView = (WebView) findViewById(R.id.webView);
        webView.setVisibility(View.INVISIBLE);
        webView.setWebChromeClient(new WebChromeClient());
        // Habilita o JS
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        // Garante que usará a WebView e não o navegador padrão
        webView.setWebViewClient(new WebViewClient() {// Callback que determina quando terminou de ser carregada a
            // WebView, para trocarmos a imagem de carregamento por ela
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                //ImageView imageView = (ImageView)
                //        findViewById(R.id.imageView);
                //imageView.setVisibility(View.INVISIBLE);
                webView.setVisibility(View.VISIBLE);
            }
        });
        // Associa a interface (a ser definida abaixo) e carrega o HTML
        webView.addJavascriptInterface(new WebAppInterface(this), "Android");
        webView.loadUrl("file:///android_asset/index.html");

        listenerSenhas = db.collection("senhas")
                .orderBy("timestampAtendimento", Direction.DESCENDING).limit(5)
                .addSnapshotListener(new EventListener<QuerySnapshot>() {
                    @Override
                    public void onEvent(@Nullable QuerySnapshot value,
                                        @Nullable FirebaseFirestoreException e) {
                        if (e != null) {
                            Log.d(TAG, "Listen failed.", e);
                            return;
                        }
                        listaSenhas = new ArrayList<>();
                        for (QueryDocumentSnapshot doc : value) {
                            if (doc.get("type") != null) {
                                if(doc.get("senha") != null){
                                    String senha = doc.getString("type")+String.valueOf(doc.get("senha"));
                                    listaSenhas.add(senha);

                                }
                            }
                        }
                        if(!listaSenhas.isEmpty()){
                            //TextView textView = (TextView) findViewById(R.id.texto);
                            //textView.setText(listaSenhas.get(0));
                            releasePlayer();
                            mp = MediaPlayer.create(getApplicationContext(), Settings.System.DEFAULT_NOTIFICATION_URI);
                            mp.start();
                        }
                        runJavaScript("setListaSenhas("+new JSONArray(listaSenhas)+");");
                        Log.d(TAG, "Current messages: " + listaSenhas);
                    }
                });

        listenerTempo = db.collection("config")
                .addSnapshotListener(new EventListener<QuerySnapshot>() {
                    @Override
                    public void onEvent(@Nullable QuerySnapshot value,
                                        @Nullable FirebaseFirestoreException e) {
                        if (e != null) {
                            Log.d(TAG, "Listen failed.", e);
                            return;
                        }

                        for (QueryDocumentSnapshot doc : value) {
                            if (doc.get("tempoApi") != null) {
                                tempoApi = Long.valueOf(doc.getString("tempoApi"));
                            }
                        }
                        runJavaScript("setTime("+tempoApi+");");
                        Log.d(TAG, "Current time: " + tempoApi);
                    }
                });

        listenerURL = db.collection("urls")
                .addSnapshotListener(new EventListener<QuerySnapshot>() {
                    @Override
                    public void onEvent(@Nullable QuerySnapshot value,
                                        @Nullable FirebaseFirestoreException e) {
                        if (e != null) {
                            Log.d(TAG, "Listen failed.", e);
                            return;
                        }
                        listaURL = new ArrayList<>();
                        for (QueryDocumentSnapshot doc : value) {
                            if (doc.get("monetary") != null) {
                                listaURL.add(doc.getString("monetary"));
                            }
                            if (doc.get("news") != null) {
                                listaURL.add(doc.getString("news"));
                            }
                            if (doc.get("weather") != null) {
                                listaURL.add(doc.getString("weather"));
                            }
                        }
                        runJavaScript("setListaURL("+new JSONArray(listaURL)+");");
                        Log.d(TAG, "Current urls: " + listaURL);
                    }
                });

    }

    // Interface para binding Javascript -> Java
    public class WebAppInterface {
        MainActivity mainActivity;
        public WebAppInterface(MainActivity activity) {
            this.mainActivity = activity;
        }
        @JavascriptInterface
        public void androidToast(String msg) {
            Toast.makeText(mainActivity, msg, Toast.LENGTH_SHORT).show();
            // Chama uma função do JavaScript
            runJavaScript("oculta_botao();");
        }

        @JavascriptInterface
        public void androidSetTime(Long time) {
            runJavaScript("setTime("+time+");");
        }

        @JavascriptInterface
        public void androidSetURL(List listURL) {
            runJavaScript("setListaURL("+listURL+");");
        }

        @JavascriptInterface
        public void androidSetSenha(List listSenha) {
            runJavaScript("setListaSenhas("+listSenha+");");
        }
    }

    // Possibilita o uso do botão voltar
    @Override
    public void onBackPressed() {
        if(webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
    // Executa um comando JavaScript
    public void runJavaScript(final String jsCode){
        this.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                webView.evaluateJavascript(jsCode, null);
            }
        });
    }

    public List<String> getListaSenhas() {
        return listaSenhas;
    }

    public Long getTempoApi() {
        return tempoApi;
    }

    public List<String> getListaURL() {
        return listaURL;
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        listenerSenhas.remove();
        listenerURL.remove();
        listenerTempo.remove();
    }

    //Método para libertar o media player
    private void releasePlayer() {
        if (mp != null) {
            mp.stop();
            mp.release();
            mp = null;
        }
    }
}