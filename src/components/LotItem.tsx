import React, { FC } from "react";

interface LotProps {
    price?: string;
}

const Lot: FC<LotProps> = ({ price }) => {
    return (
        <div>
            { price }
        </div>
    );
};

export default Lot;