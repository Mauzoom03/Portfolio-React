import React, { useEffect, useState, useRef } from 'react'
import './_navComponent.scss';

const NavComponent = ({ template }) => {
    const [liValues, setLiValues] = useState(Array.from({ length: template.defaultContent.count }, () => ''));
    const [bgColor, setBgColor] = useState('');
    const [fontColor, setFontColor] = useState('');
    const [fontSize, setFontSize] = useState('');
    const [fontWeight, setFontWeight] = useState('');
    const [textDecoration, setTextDecoration] = useState('');
    const [navStyles, setNavStyles] = useState([]);
    const [ulStyles, setUlStyles] = useState([]);
    const [liStyles, setLiStyles] = useState([]);

    const handleLiChange = (index) => (event) => {
        const newLiValues = [...liValues];
        newLiValues[index] = event.target.value;
        setLiValues(newLiValues);
    };

    const handleBgColor = (event) => {
        setBgColor(event.target.value);
    };

    const handleFontColor = (event) => {
        setFontColor(event.target.value)
    }

    const handleFontSize = (event) => {
        setFontSize(`${event.target.value}px`)
    }

    const handleFontWeight = (event) => {
        setFontWeight(event.target.value)
    }

    const handleTextDecoration = (event) => {
        setTextDecoration(event.target.value)
    }

    const visualNav = useRef(null);
        useEffect(() => {
            if (visualNav.current && visualUl.current) {
                const computedNavStyles = window.getComputedStyle(visualNav.current);
                const computedUlStyles = window.getComputedStyle(visualUl.current);
                let widthValue;
                if (computedUlStyles.flexDirection === 'row') {
                    widthValue = '100%';
                } else {
                    widthValue = computedNavStyles.width;
                }

                setNavStyles({
                    backgroundColor: computedNavStyles.backgroundColor,
                    width: widthValue,
                    padding: computedNavStyles.padding
                });
        }
    }, [bgColor]);    

    

    const visualUl = useRef(null);
    useEffect(() => {
        if (visualUl.current) {
            const computedStyles = window.getComputedStyle(visualUl.current);
            setUlStyles({
                display: computedStyles.display,
                flexDirection: computedStyles.flexDirection,
                width: '100%',
                gap: computedStyles.gap,
                justifyContent: computedStyles.justifyContent
            });
        }
    }, []);

    const visualLi = useRef(null);
    useEffect(() => {
        if (visualLi.current) {
            const computedStyles = window.getComputedStyle(visualLi.current);
            setLiStyles({
                color: computedStyles.color,
                fontSize: computedStyles.fontSize,
                fontWeight: computedStyles.fontWeight,
                textDecoration: computedStyles.textDecoration
            });
        }
    }, [fontColor, fontSize, fontWeight, textDecoration]);

    const getFirstWord = (text) => {
        if (text) {
            const words = text.split(" ");
        return words[0];
        }
        return null;
    };

    return (
        <div className='container-all'>
            <div className='container-editor'>
                {'<'}
                {template.elementType}
                {'>'}
                <br></br>
                    {'<'}
                    {template.defaultContent ? template.defaultContent.children : null}
                    {'>'}
                    <br></br>
                        {Array.from({ length: template.defaultContent.count }).map((_, index) => (
                        <React.Fragment key={index}>
                            {'<'}
                            {template.defaultContent ? template.defaultContent.items : null}
                            {'>'}
                                <input type='text' onChange={handleLiChange(index)} maxLength={12}/>
                            {'</'}
                            {template.defaultContent ? template.defaultContent.items : null}
                            {'>'}
                            <br></br>
                        </React.Fragment>
                        ))}
                    {'</'}
                    {template.defaultContent ? template.defaultContent.children : null}
                    {'>'}
                    <br></br>
                {'</'}
                {template.elementType}
                {'>'}
            </div>

            <div className="styles-editor">
                <label htmlFor="bgColor">
                    <p>Color de Fondo</p>
                    <input type="color" id='bgColor' onChange={handleBgColor}/>
                </label>
                
                <label htmlFor="fontColor">
                    <p>Color de Letra</p>
                    <input type="color" id='fontColor' onChange={handleFontColor}/>
                </label>
                
                <label htmlFor="fontSize">
                    <p>Tamaño de Letra</p>
                    <input type="number" id='fontSize' min={12} max={20} onChange={handleFontSize}/>
                </label>
                
                <label htmlFor="fontWeight">
                    <p>Negrita</p>
                    <div>
                    <input type="radio" name='fontWeight' value="bold" onChange={handleFontWeight}/>
                    <input type="radio" name='fontWeight' value="normal" onChange={handleFontWeight}/>
                    </div>
                    
                </label>
                
                <label htmlFor="textDecoration">
                    <p>Subrayado</p>
                    <div>
                    <input type="radio" name='textDecoration' value="underline" onChange={handleTextDecoration}/>
                    <input type="radio" name='textDecoration' value="none" onChange={handleTextDecoration}/>
                    </div>
                    
                </label>
                
            </div>

            <div className="container-renderized_visual" >
                <nav className={template.defaultStyles[0]} style={{backgroundColor: `${bgColor}`}} ref={visualNav}>
                    <ul className={template.defaultStyles[1]} ref={visualUl}>
                        {liValues.map((value, index) => (
                            <li className={template.defaultStyles[2]} key={index} style={{color: `${fontColor}`, fontSize: `${fontSize}`, fontWeight: `${fontWeight}`, textDecoration: `${textDecoration}`}} ref={visualLi}>{value}</li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className='container-renderized_html'>
                {'<'}
                {template.elementType}
                {'>'}
                <br></br>
                    {'<'}
                    {template.defaultContent ? template.defaultContent.children : null}
                    {'>'}
                    <br></br>
                        {Array.from({ length: template.defaultContent.count }).map((_, index) => (
                        <React.Fragment key={index}>
                            {'<'}
                            {template.defaultContent ? template.defaultContent.items : null}
                            {'>'}
                            <span>{liValues[index]}</span>
                            {'</'}
                            {template.defaultContent ? template.defaultContent.items : null}
                            {'>'}
                            <br></br>
                        </React.Fragment>
                        ))}
                    {'</'}
                    {template.defaultContent ? template.defaultContent.children : null}
                    {'>'}
                    <br></br>
                {'</'}
                {template.elementType}
                {'>'}
            </div>
            <div className='container-renderized_css'>
                <h4>Estilos del {'<nav>'}</h4>
                <div className='css-nav'>
                    <p>background-color: {navStyles.backgroundColor}</p>
                    <p>width: {navStyles.width}</p>
                    <p>padding: {navStyles.padding}</p>
                </div>
                <button>Copiar</button>
                <h4>Estilos de la {'<ul>'}</h4>
                <div className='css-ul'>
                    <p>display: {ulStyles.display}</p>
                    <p>flex-direction: {ulStyles.flexDirection}</p>
                    <p>justify-content: {ulStyles.justifyContent}</p>
                    <p>gap: {ulStyles.gap}</p>
                    <p>width: {ulStyles.width}</p>
                </div>
                <button>Copiar</button>
                <h4>Estilos de la {'<li>'}</h4>
                <div className='css-li'>
                    <p>color: {liStyles.color}</p>
                    <p>font-size: {liStyles.fontSize}</p>
                    <p>font-weight: {liStyles.fontWeight}</p>
                    <p>text-decoration: {getFirstWord(liStyles.textDecoration)}</p>
                </div>
                <button>Copiar</button>
            </div>
        </div>
    )
}

export default NavComponent
