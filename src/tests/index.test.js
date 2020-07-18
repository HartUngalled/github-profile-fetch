import React from "react";
import {cleanup, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/Card.js"

afterEach(cleanup);

function renderCard(args) {
    let defaultProps = {
        key: "",
        profile: "",
    };
    const props = {...defaultProps, ...args};

    return render(<Card {...props} />)
}

it("should display github username on Card", () => {
    const { getByText } = renderCard({
        profile: {
            name: "Michał Garus"
        }
    });
    getByText("Michał Garus");
})


it("should not display github login on Card", () => {
    const { queryByText } = renderCard({
        profile: {
            login: "HartUngalled"
        }
    });
    expect(queryByText("HartUngalled")).toBeNull();
})