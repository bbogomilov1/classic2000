import RootLayout from "./RootLayout";

function ErrorPage() {
  return (
    <>
      <RootLayout />
      <div>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </div>
    </>
  );
}

export default ErrorPage;
