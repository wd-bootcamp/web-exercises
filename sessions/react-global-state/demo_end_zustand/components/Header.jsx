import styled from "styled-components";
import Link from "next/link";
import { useAnimalsStore } from "../stores/animals";

const Title = styled.h1`
    font-size: 1rem;
    margin: 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

export default function Header() {
    // const getSum = useAnimalsStore((state) => {
    //     const numAnimals = state.animals.map((animal) => animal.count);
    //     return numAnimals.reduce((a, b) => a + b);
    // });

    const getSum = useAnimalsStore((state) => state.getSum());

    return (
        <Title>
            <StyledLink href="/">
                CounterApp
                <span role="img" aria-label="trademark">
                    ™
                </span>{" "}
                — currently counting <strong>{getSum}</strong> things.
            </StyledLink>
        </Title>
    );
}
