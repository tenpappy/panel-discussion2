import { VFC } from "react";

type Props = {
  onClick: (id: number) => void;
  id: number;
};

export const NowButton: VFC<Props> = (props) => {
  const { onClick, id } = props;
  return (
    <div>
      <button
        className="px-6 py-2 my-3 mr-2 h-10 text-base font-semibold rounded-full border-b border-purple-300 bg-yellow-200 hover:bg-yellow-300 text-yellow-900 focus:outline-none"
        onClick={() => onClick(id)}
      >
        NOW
      </button>
    </div>
  );
};
