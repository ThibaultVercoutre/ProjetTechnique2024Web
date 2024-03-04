import './Header.css';
import { useState } from 'react';
import { PresentationPage } from '../PresentationPage/PresentationPage';
import { Demarches } from '../Demarches/Demarches';
import { Resultats } from '../Resultats/Resultats';
import { Tests } from '../Tests/Tests';


export const Header = () => {
    const [page, setPage] = useState(<PresentationPage />);
    return (
        <div>
            <div id='headerdiv'>
                <div className='headerbutton' onClick={() => setPage(<PresentationPage />)}>Présentation</div>
                <div className='headerbutton' onClick={() => setPage(<Demarches />)}>Démarches</div>
                <div className='headerbutton' onClick={() => setPage(<Resultats />)}>Résultats</div>
                <div className='headerbutton' onClick={() => setPage(<Tests />)}>Tests</div>
            </div>
            {page}
        </div>
    )
}