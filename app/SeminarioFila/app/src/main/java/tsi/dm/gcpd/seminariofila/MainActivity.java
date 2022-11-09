package tsi.dm.gcpd.seminariofila;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.provider.Settings;
import android.util.Log;
import android.widget.TextView;

import com.google.firebase.firestore.EventListener;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.FirebaseFirestoreException;
import com.google.firebase.firestore.ListenerRegistration;
import com.google.firebase.firestore.Query.Direction;
import com.google.firebase.firestore.QueryDocumentSnapshot;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private FirebaseFirestore db = FirebaseFirestore.getInstance();
    private final String TAG = "DEBUG TESTE: ";
    private ListenerRegistration listener;
    MediaPlayer mp = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        listener = db.collection("messages")
                .orderBy("timestamp", Direction.DESCENDING).limit(1)
                .addSnapshotListener(new EventListener<QuerySnapshot>() {
                    @Override
                    public void onEvent(@Nullable QuerySnapshot value,
                                        @Nullable FirebaseFirestoreException e) {
                        if (e != null) {
                            Log.d(TAG, "Listen failed.", e);
                            return;
                        }

                        List<String> messages = new ArrayList<>();
                        for (QueryDocumentSnapshot doc : value) {
                            if (doc.get("message") != null) {
                                messages.add(doc.getString("message"));
                                TextView textView = (TextView) findViewById(R.id.texto);
                                textView.setText(doc.getString("message"));
                            }
                        }
                        releasePlayer();
                        mp = MediaPlayer.create(getApplicationContext(), Settings.System.DEFAULT_NOTIFICATION_URI);
                        mp.start();
                        Log.d(TAG, "Current messages: " + messages);
                    }
                });

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        listener.remove();
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