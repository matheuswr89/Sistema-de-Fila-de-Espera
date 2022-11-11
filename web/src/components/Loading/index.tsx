import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <section className="loading">
      <ReactLoading type="spin" color="#000" height="20%" width="20%" />
      <h1>Carregando...</h1>
    </section>
  );
};

export default Loading;
