import React from 'react';
import "./Loader.css";

export default function Loader() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">

        <div className="lds-spinner"><div>
        </div>
          <div>
          </div><div>
          </div><div>
          </div><div>
          </div><div>
          </div><div>
          </div><div>
          </div><div>
          </div><div>
          </div><div>
          </div><div>
          </div>
        </div>

      </div>
    </div>

  )
}