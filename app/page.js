import Button from "../components/Button";
import Card from "../components/Card";
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">
        Welcome to My Website
      </h1>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Get Started (TAILWIND)
      </button>
      <br />
      <br />
      <Button label="Click Me (css module)" />
      <br />
      <br />
      <Card title="Card Title" content="This is a card with styled JSX." />
    </div>
  );
}
