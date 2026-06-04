// 1.- libraries
import { RouterProvider } from "@tanstack/react-router";

// 2.- router
import { router } from "./router";

// 3.- components
import Spinner from "@shared/components/atoms/Spinner";
import Snackbar from "@shared/components/atoms/Snackbar";

// 4.- store
import { useUIStore } from "@shared/stores/ui";

const App: React.FC = () => {
    const { loading, snackbar, theme } = useUIStore();
    return (
        <>
            <RouterProvider router={router} />
            {loading && <Spinner theme={theme} />}
            {snackbar.open && (
                <Snackbar
                    title={snackbar.title}
                    message={snackbar.message}
                    variant={snackbar.variant}
                />
            )}
        </>
    );
};

export default App;
