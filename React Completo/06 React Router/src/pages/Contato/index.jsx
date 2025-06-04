// Hooks / Libs:

// Assets:
import imgContact from '../../assets/images/contato.jpg'

// Style:
import './style.css';


const Contato = () => {
    const dataContact = {
        email: 'lucas@origamid.com',
        phone: '99999-9999',
        address: 'Rua Ali Perto, 999'
    }


    return (
        <main className="Contato">
            <div className="photo">
                <img src={imgContact} alt="" />
            </div>

            <div className="details_contact">
                <h2>Entre em contato.</h2>

                <ul>
                    <li>{dataContact.email}</li>
                    <li>{dataContact.phone}</li>
                    <li>{dataContact.address}</li>
                </ul>
            </div>
        </main>
    )
}
export default Contato;