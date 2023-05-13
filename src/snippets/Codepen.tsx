import React, { useState } from 'react';
import Modal from './Modal';

interface CodepenProps {
  src: string;
  title: string;
  img: string;
}

const Codepen: React.FC<CodepenProps> = ({ src, title, img}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={handleButtonClick}>
        <div className="card__image image">
          <img src={img} height="100" width="100" alt={title}/>
        </div>
        <div className="card__card-content">
          <span className='card-content__title'>{title}</span>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <iframe style={{width: '70vw', maxWidth: '1000px', minHeight: '70vh'}} scrolling="no" title={title} 
            src={"https://codepen.io/ash_s_west/embed/"+src+"?height=265&theme-id=dark&default-tab=css,result"} 
            frameBorder="no" loading="lazy" allowFullScreen={true}>
            See the Pen <a href={"https://codepen.io/Saleemw/pen/" + src}>Dynamically load JS on click</a>
            by Ashley Saleem-West <a href="https://codepen.io/ash_s_west">@ash_s_west</a> on <a href="https://codepen.io">CodePen</a>.
          </iframe>
          {/* <iframe src={src} title={title} width="100%" height="500px" frameBorder="0" allowFullScreen></iframe> */}
        </Modal>
      )}
    </>
  );
};

export default Codepen;
