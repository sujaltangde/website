import React from 'react';
import "../../styles/Benefits.css";

const Benefits = React.memo(() => {
    return (
        <main>
            <div className="benefit-container">
                <h1 className="heading-benefit">Perks & Benefits</h1>
            </div>
        </main>
    );
});

Benefits.displayName = "Benefits";

export default Benefits;
