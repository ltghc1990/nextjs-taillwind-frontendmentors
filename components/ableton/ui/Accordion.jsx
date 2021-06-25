import Button from "../../ui/Button";

const Accordion = () => {
  const smallText = { fontSize: ".80rem" };
  return (
    <div className="container mx-auto items-center">
      <div className="mb-6">
        <p className="font-semibold py-2 text-2xl">More on Ableton.com:</p>
        <div className="flex space-x-8  ">
          <Button style={smallText}>Blog</Button>
          <Button style={smallText}>Ableton for the Classroom</Button>
          <Button style={smallText}>
            Albeton for College and Universities
          </Button>
          <Button style={smallText}>Certified Training</Button>
          <Button style={smallText} className="text-red-300">
            About Ableton
          </Button>
          <Button style={smallText}>Jobs</Button>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
