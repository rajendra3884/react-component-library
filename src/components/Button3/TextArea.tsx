import React from "react";
import "./button.css";

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    rows?: number;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * TextArea contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

/**
 * Primary UI component for user interaction
 */
const TextArea = ({
                    primary = true,
                    backgroundColor,
                    size = "medium",
                    rows,
                    onClick,
                    label,
                }: ButtonProps) => {
    const mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (
        <textarea
            rows={rows}
            className={["storybook-button", `storybook-button--${size}`, mode].join(
                " "
            )}
            style={backgroundColor ? {backgroundColor} : {}}
        >
            {label}
        </textarea>
    );
};

export default TextArea;