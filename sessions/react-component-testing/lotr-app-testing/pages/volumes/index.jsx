import Introduction from "../components/Introduction/Introduction";
import Main from "../components/Main/Main";
import Section from "../components/Section/Section";
import VolumeList from "../components/VolumeList/VolumeList";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <Main $gap={48}>
      <Introduction
        title={
          <>
            The Lord of
            <br />
            the Rings
          </>
        }
        text={introduction}
      />
      <Section>
        <h2>All Volumes</h2>
        <VolumeList volumes={volumes} />
      </Section>
    </Main>
  );
}
