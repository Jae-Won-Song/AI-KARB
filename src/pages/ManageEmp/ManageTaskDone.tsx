import React from 'react';
import doneImg from '../../assets/form.svg';

const ManageTaskDone = () => {
  return (
    <div className="DoneTaskWrapper">
      <div>
        <img src={doneImg} alt="" />
      </div>
      <div>잔여 배분량 없음</div>
      <div>모든 작업 배분을 완료했습니다.</div>
    </div>
  );
};

export default ManageTaskDone;
