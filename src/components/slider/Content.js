import React,  { useRef, useEffect }  from 'react';
import IconCross from './Icons/IconCross';
import './Content.scss';

const Content = ({ movie, onClose }) => {

 //Deixar o scroll(barra) no fim da página  
 const messagesEndRef = useRef(null);
    
 useEffect(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), [messagesEndRef.current]);  

return (
  <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${movie.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">{movie.description}</div>
        <div className="content__runtime">Tempo de duração: {movie.runtime}</div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
    <div ref={messagesEndRef} />
  </div>
)};

export default Content;
