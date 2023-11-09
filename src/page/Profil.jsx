import Header from "../component/Header"
import Footer from "../component/Footer"

function Profil () {
    return (
        <>
        <Header/>
        <main className="cv">
        <div>
            <span className="imgBlob"> <img src="https://www.autourdesanimaux.com/wp-content/uploads/blobfish-2-300x300.jpeg" alt="très beau blobfish"></img></span>
 <h1> Blob Fish </h1>
 <p>Curriculum Vitae</p>
 </div>

        <h2>Coordonnées</h2>
        <p>Email: blob.fish@lapiscine.pro</p>
        <p>Téléphone: (123) 456-7890</p>
        <p>Adresse: 123 Rue de la Fresque du BlobFish , Marineland, Ocean Pacifique</p>
   
        <h2>Nageur Professionnel</h2>
        <ul>
            <li><strong>Diplôme de Nageoire Dorée</strong> - Marineland, 2018</li>
            <li><strong> Professeur de Natation Synchronisée </strong> - Aquarium de La Rochelle, 2020</li>
        </ul>

        <h2>Expérience Professionnelle</h2>
        <ul>
            <li>
                <strong>Professeur de Natation </strong>
                <em>Aquarium de La Rochelle </em> - La Rochelle, France- 02/2023 à encore en poste.
                <p>J'ai pu apprendre a mes élèves a avoir l'attitude d'un bon nageur et aussi de perfectionner leurs sens pour lutter face au danger des prédateurs.</p>
            </li>

            </ul>
        <h2>Compétences</h2>
        <ul>
            <li>Trop Laid</li>
            <li>Trop Bon Nageur </li>
            <li> Trop célèbre</li>
        </ul>
   

  
        <h2>Langues</h2>
        <ul>
            <li>Bloup Bloup - Niveau Expert</li>
            <li>Francais - Niveau Expert</li>
        </ul>
 
</main>
<Footer/>
</>
    )

}

export default Profil