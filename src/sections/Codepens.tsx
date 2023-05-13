import React from 'react';
import LayoutGrid from '../layouts/LayoutGrid';
import Codepen from '../snippets/Codepen';

interface CodePensProps {
  title: string;
  url: string;
  img: string;
}

const CodePens: React.FC = () => {
  const codepenList: CodePensProps[] = [
    { title: 'Dynamically load JS on click', url: 'poPOMoV', img: 'static/mainpage/codepen/codepen-1.webp' },
    { title: 'Pure CSS side menus', url: 'bGrwVWx', img: 'static/mainpage/codepen/codepen-2.webp' },
    { title: 'Pure CSS infinite slider', url: 'ZEJpWoq', img: 'static/mainpage/codepen/codepen-3.webp' },
    { title: 'Pure CSS dark mode switch', url: 'RwRejrb', img: 'static/mainpage/codepen/codepen-4.webp' },
  ];

  return (
    <LayoutGrid
      title="CodePens"
    >
        {codepenList.map((item, index) => (
          <Codepen key={index} title={item.title} src={item.url} img={item.img} />
        ))}
      {/* <a className="button black-button" href="https://codepen.io/ash_s_west" rel="noopener" title="codepen">
        See more on CodePen
      </a> */}
    </LayoutGrid>
  );
};

export default CodePens;