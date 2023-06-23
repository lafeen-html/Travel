import React, { useState } from 'react';
import openListLogo from './openedList.svg';
import closedListLogo from './closedList.svg';

export default function CollapsibleDiv({ title, children, classNameHeader }) {
  const [isOpened, setIsOpened] = useState(true);
  const openText = "Показать ";
  const closedText = "Скрыть ";
  const openImg = openListLogo;
  const closedImg = closedListLogo;
  const isOpenedText = isOpened ? closedText : openText;
  const isOpenedImg = isOpened ? openImg : closedImg;
  const handleChangeIsOpened = () => setIsOpened(!isOpened);

  return (
    <>
      <div onClick={handleChangeIsOpened} className={classNameHeader}>
        {title}
        <p style={{ cursor: "pointer" }}>
          <span className="fs-6 ">{isOpenedText}</span>
          <img src={isOpenedImg} alt="isOpenedImg" />
        </p>
      </div>
      {isOpened && children}
    </>
  )
}