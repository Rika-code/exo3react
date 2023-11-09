function ProfileMenu () {
    const userLogged = true;
    const user = {
        firstname : "Chloé",
        lastname : "Malique-Girerd",
        job : "Dev en Formation hihi"
    }

return (

    <>
    {userLogged ? 

         <li> Bonjour {user.firstname} {user.lastname} ! Courage pour ton cursus de {user.job}</li>
         
         :
         
         <li>Connecte toi stp j'ai pas ton temps! </li>
    }
    </>
)}
export default ProfileMenu