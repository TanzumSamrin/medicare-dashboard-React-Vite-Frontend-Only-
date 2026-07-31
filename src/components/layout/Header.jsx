import Button from "../ui/Button";

function Header({ onCrash }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="header-logo">M</div>

          <div>
            <h1>MediCare Clinic</h1>
            <p>Front Desk Dashboard</p>

            {/* [REQ-2d] IIFE inside JSX — greeting / summary line */}
            {(() => {
              const hour = new Date().getHours();
              let greeting = "Good evening";

              if (hour < 12) greeting = "Good morning";
              else if (hour < 17) greeting = "Good afternoon";

              return (
                <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "4px" }}>
                  {greeting}, Receptionist · {new Date().toLocaleDateString("en-BD", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              );
            })()}
          </div>
        </div>

        <div className="header-right">
          {/* Crash Test button — demonstrates Error Boundary */}
          <Button variant="danger" onClick={onCrash}>
            Crash Test
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;