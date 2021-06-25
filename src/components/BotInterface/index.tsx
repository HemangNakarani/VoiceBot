import React, { ReactElement } from "react";
import DialogBox from "../DialogBox";
import FloatingButton from "../FloatingButton";

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface IState {
  opened: Boolean;
}

export default function BotInterface({ children }: Props): ReactElement {
  const [state, setState] = React.useState<IState>({ opened: false });

  const handleToggle = () => {
    setState((prevState: IState) => {
      return { ...prevState, opened: !prevState.opened };
    });
  };

  return (
    <div>
      <DialogBox toggle={handleToggle} opened={state.opened}>
        {children}
      </DialogBox>
      <FloatingButton opened={state.opened} toggle={handleToggle} />
    </div>
  );
}
