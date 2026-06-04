// 1.- libraries
// import { useNavigate } from "@tanstack/react-router";

// 2.- model
// import { useAuthStore } from "../../../store/auth";

const NotFound = () => {
    // const navigate = useNavigate();
    // const { isAuth } = useAuthStore();
    return (
        <main className="relative min-h-screen">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
                className="absolute inset-0 w-full h-full object-cover object-top z-0"
            />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                <p className="text-base font-semibold text-white">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-lg font-medium text-white sm:text-xl">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex justify-center">
                    <p
                        className="text-sm font-semibold text-white cursor-pointer"
                        // onClick={() => navigate({ to: isAuth ? "/inbox" : "/login" })}
                    >
                        <span aria-hidden="true">&larr;</span> Back to home
                    </p>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
