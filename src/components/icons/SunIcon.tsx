import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";


// props structure for the SunIcon
interface sunProps {
    style?: React.CSSProperties;
    onClick: () => void;
}

const SunIcon: React.FC <sunProps> = ({ style, onClick }) => {
    return (
        <>
            <LightModeIcon sx={style} onClick={onClick} />
        </>
    );
}

export default SunIcon;
