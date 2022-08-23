import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Box01 from './box01';

function Tabs01() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Box01/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <div style={{width:'100%', height:'500px', background:'blue'}}>
            <h3>Box02</h3>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <h3>Box03</h3>
      </Tab>
    </Tabs>
  );
}

export default Tabs01;