"use client";
import * as z from "zod";
import { formSchema } from "./constants";
import Heading from "@/components/heading";
import { MessageCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConversationPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues: {
            prompt:""
        }
    });

    const isLoading = form.formState.isSubmitting;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (  
        <div>
            <Heading
            title="Conversation"
            description="Our most advanced conversation model"
            icon={MessageCircleIcon}
            iconColor="text-sky-600"
            bgColor="bg-sky-500/10"
            />
            <div>
                <Form {...form}>
                    <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="
                    rounded-lg
                    border
                    w-full
                    p-4
                    px-3
                    md:px-6
                    focus-within:shadow-sm
                    grid
                    grid-col-12
                    gap-2
                    "
                    >
                        <FormField 
                        name="prompt"
                        render={({ field }) =>(
                            <FormItem className="col-span-12 lg:col-span-10" >
                                <FormControl className="m-0 p-0">
                                    <Input
                                    className="border-0 outline-none
                                    focus-visible:ring-0 focus-visible:ring-transparent"
                                    placeholder="Type anything.."
                                    disabled={isLoading}
                                    />
                                </FormControl>

                            </FormItem>
                        )}
                        />
                        <Button className="col-span-12 lg:col-span-2">
                            Generate
                        </Button>
                    </form>
                </Form>            
            </div>
        </div>
    );
}
 
export default ConversationPage;