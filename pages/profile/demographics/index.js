import Head from "next/head";
import { Content, Header } from "../../../components/layout/layout";
import DoughnutChart from "../../../components/charts/doughnut";
import Bar from "../../../components/charts/bar";
import Segment from "../../../components/layout/segment/segment"
import { text } from "../../../text1A";
import SectionTitle from "../../../components/layout/sectiontitle/sectiontitle";

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Demographics</h1>

        <SectionTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </SectionTitle>

        <Segment title="Gender" graph={<DoughnutChart datatype="Gender" />}>
        "At vero eos et accusamus et iusto odio dignissimos ducimus q
        </Segment>
        <Segment title="Hometown" graph={ <Bar datatype="Hometown" />}>
          
        </Segment>
        
        <Segment title="Parents" graph={<DoughnutChart datatype="Parents Born" />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 

        </Segment>
        <Segment graph={
        <>
        <DoughnutChart datatype="Parental Education"/>
        <DoughnutChart datatype="Parents Stem" />
        </>
        } onTop={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          
        </Segment>

        <Segment title="Religion" graph={<DoughnutChart datatype="Religion" />}>
          
        </Segment>
        <Segment title="Year Born" graph={<DoughnutChart datatype="Year Born" />}>
          
        </Segment>
      <Bar datatype="Sexuality" />

      </Content>
    </>
  );
}
