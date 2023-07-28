import React from "react";
import ChildComponet from "./ChildComponent";
import AddComponent from "./AddComponent";
/**
 * JSX
 * fragment
 */
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abc1", title: "DEV", salary: "500" },
      { id: "abc2", title: "TESTER", salary: "100" },
      { id: "abc3", title: "TESTER2", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log("check", job);
    this.setState({
      arrJobs : [... this.state.arrJobs,job]
    })
    // this.setState({
    //   arrJobs: this.state.arrJobs.push(job),
    // });
  };

  Click = () => {
    alert("Click");
  };

  render() {
    // let name = "Oanh";
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponet arrJobs={this.state.arrJobs} />
        {/* <ChildComponet  name = {'Child two '}/>
        <ChildComponet  name = {'Child three '}/> */}
      </>
    );
  }
}
export default MyComponent;
