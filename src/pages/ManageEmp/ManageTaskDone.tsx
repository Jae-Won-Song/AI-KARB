import React, { useEffect, useState } from 'react';
import doneImg from '../../assets/form.svg';
import Toast from '../../components/Common/Toast';

const ManageTaskDone = () => {
  const [toast, setToast] = useState<{ mode: 'success' | 'failed'; title: string; content: string } | null>(null);

  useEffect(() => {
    setToast({
      mode: 'success',
      title: '작업 배분 완료',
      content: '심의자에게 작업이 배분되었습니다.',
    });
  }, []);

  return (
    <div className="doneTaskContainer">
      <div className="doneTaskWrapper">
        <div>
          <img className="doneTaskWrapper__image" src={doneImg} alt="배분 할 작업 없음" />
        </div>
        <div className="doneTaskWrapper__title">잔여 배분량 없음</div>
        <div className="doneTaskWrapper__article">모든 작업 배분을 완료했습니다.</div>
      </div>
      {toast && (
        <Toast
          mode={toast.mode === 'success' ? 'blue' : 'red'}
          title={toast.title}
          content={toast.content}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default ManageTaskDone;
