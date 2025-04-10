import '../../App.css'
import { useState } from "react";
import Counter from "./Counter"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LikeUnlike(props: any) {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div>
      <p>{props.title}</p>
      {/* <img  /> */}
      <p>Description:- This is description of this card.</p>
      <button onClick={() => setHasLiked(!hasLiked)} className="hert-imoji">
        {hasLiked ? "🧡" : "🤍"}
      </button>
      <div>
        <h3>The second example of useState.</h3>
        <Counter />
      </div>
    </div>
  );
}

export default LikeUnlike;
