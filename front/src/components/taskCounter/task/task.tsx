import type { FC, ReactElement } from "react"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import type { ITask } from "@/types/task.interface"

export const Task: FC<ITask> = (props: ITask): ReactElement => {

    const { title, description, status, priority, dueDate } = props;

    let formattedDate = new Date(dueDate).toLocaleDateString("en-us", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })

    return (
        <Card className="w-full mb-4">
            <CardHeader className="flex flex-row justify-between">
                <CardTitle className="basis-2/3 leading-8">{title}</CardTitle>
                <div>
                    <Badge className="mr-2" variant="outline">
                        {formattedDate}
                    </Badge>

                    {priority === "low" && (
                        <Badge className="bg-green-500" variant="outline">
                            {priority}
                        </Badge>
                    )}

                    {priority === "normal" && (
                        <Badge className="bg-blue-500" variant="outline">
                            {priority}
                        </Badge>
                    )}

                    {priority === "high" && (
                        <Badge className="bg-red-500" variant="outline">
                            {priority}
                        </Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardFooter className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                    <Switch id="in-progress" checked={status === "inProgress"} />
                    <Label className="ml-4" htmlFor="in-progress">
                        {status}
                    </Label>
                </div>
                <Button>Completed</Button>
            </CardFooter>
        </Card>
    )
}