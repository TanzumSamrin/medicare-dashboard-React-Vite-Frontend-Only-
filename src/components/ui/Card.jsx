// [REQ-5] Component composition using children prop

function Card({ title, action, children }) {
  return (
    <div className="card">
      {(title || action) && (
        <div className="card-header">
          <h2 className="card-title">{title}</h2>

          {action && (
            <div className="card-action">
              {action}
            </div>
          )}
        </div>
      )}

      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;