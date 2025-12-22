export const TasksCoutner = () => {
    return (
        <div className="flex flex-col items-center justify-center">

            {/* circle */}
            <div className="p-6 border-solid border-4 border-red-500 rounded-full mb-4">
                <div className="min-w-10 min-h-10 text-center justify-center text-white text-3xl leading-10">
                    12
                </div>
            </div>

            {/* text */}
            <div className="text-white text-xl text-center">
                Todo
            </div>
        </div>
    )
};