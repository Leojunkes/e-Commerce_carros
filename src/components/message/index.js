import React from 'react';

import { useSelector } from 'react-redux';

function Message() {
  const isShow = useSelector((state) => state.layout.showMessage);
  return (
    <React.Fragment>
        {isShow && (
            <div className="container mt-3">
            <div className="alert alert-success" role="alert">
              Cadastro concluído com sucesso!
            </div>
          </div>
        )}
    </React.Fragment>
    
  );
}

export default Message;
