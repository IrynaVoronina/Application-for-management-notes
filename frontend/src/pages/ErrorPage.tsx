import React from "react";

export default function ErrorPage({error, resetErrorBoundary}: any) {

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="card border-danger mb-3">
                <div className="card-header bg-danger text-white">
                    <h4 className="card-title">Something went wrong</h4>
                </div>
                <div className="card-body text-danger-emphasis">
                    <pre className="bg-light p-3">{error?.response?.data?.message || error.message}</pre><br/>
                    <p className="card-text"> Try clicking the refresh page button to reload the application.</p>
                    <button className="btn btn-lg btn-secondary mt-3" onClick={resetErrorBoundary}>
                        Refresh page
                    </button>
                </div>
            </div>
        </div>
    );
}