import Header from '../Components/Header/Header';
import ContentBox from '../Components/ContentBox/ContentBox';
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
    const conteudo = (
        <div>
            <h1>Seja bem vindo a ONG do Raji!</h1>
            <p>Aqui será colocado todo o conteúdo referente a <b>Página Inicial</b> do site.</p>
            <p>Coloquei um <b>min-height: 70vh;</b> no ContentBox só para o Footer ficar aparecendo mais pra baixo enquanto não temos conteúdo nesta página.</p>
        </div>
    )
    return (
        <div>
            <Header/>
            <ContentBox children={conteudo}></ContentBox>
            <Footer/>
        </div>
    )
}

export default HomePage
