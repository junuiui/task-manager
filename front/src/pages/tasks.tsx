import { TasksCoutner } from '@/components/taskCounter/tasksCounter';
import type { FC, ReactElement } from 'react';

export const Tasks: FC = (): ReactElement => {
    return (
        <section className='flex flex-row w-full p-4 gap-8'>
            {/* sidebar */}
            <section className='flex basis-2/3 justify-center'>
                <div className='flex flex-col w-4/5 p-4 '>
                    <h1 className='text-white font-bol text-2xl mb-8'>
                        Tasks as on: {Date.now().toString()}
                    </h1>
                    <div className='flex justify-around'>
                        <TasksCoutner />
                        <TasksCoutner />
                        <TasksCoutner />
                    </div>
                </div>
            </section>

            {/* sidebar */}
            <section className='flex basis-1/3 bg-pink-50 text-black'>
                Create Task
            </section>
        </section>

    )
}