import React from "react";
import { Button } from "./Button";
// import { TrashIcon } from "@heroicons/react/24/solid";
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button
        variant="danger"
        className="w-10  rounded-[100%]"
        onClick={props.onDecrease}
      >
        {props.qty === 1 ? "-" : "-"}
      </Button>
      <p>{props.qty}</p>
      <Button
        className="w-10 rounded-[100%]"
        variant="success"
        onClick={props.onIncrease}
      >
        +
      </Button>
    </div>
  );
};

export default QtyBtn;
