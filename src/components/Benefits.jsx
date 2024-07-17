import { Section } from "./Section";
import Heading from "./Heading";

function Benefits() {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title="Chat smarter, Not Harder With Brainwave"
                />
            </div>
        </Section>
    );
}

export default Benefits;
