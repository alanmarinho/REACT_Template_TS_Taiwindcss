import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
      <div className="w-full max-w-md rounded-xl border bg-background p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Hello World</h1>

        <p className="mt-2 text-muted-foreground">
          Esta é a página inicial.
        </p>

        <div className="mt-8">
          <button
            onClick={() => navigate("/exemplo")}
            className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            Ir para tela de exemplo
          </button>
        </div>
      </div>
    </div>
  );
}