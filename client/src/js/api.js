import { supabase } from "../lib/supabase";

export async function sendContact(data) {
    if (!supabase) {
        console.error("Supabase initialization failed.");
        throw new Error("Supabase is not configured.");
    }

    const contact = {
        name: data.name.trim(),
        email: data.email.trim(),
        message: data.message.trim(),
    };

    const { error: insertError } = await supabase
        .from("contacts")
        .insert(contact);

    if (insertError) {
        console.error("Supabase contacts insert failed:", insertError);
        throw new Error(`Supabase insert failed: ${insertError.message}`);
    }

    console.log("Supabase contact inserted successfully.");

    const { data: result, error: functionError } = await supabase.functions.invoke("contact", {
        body: contact,
    });

    if (functionError) {
        console.error("Supabase Edge Function invocation failed:", functionError);
        throw new Error(`Edge Function failed: ${functionError.message}`);
    }

    if (!result?.success) {
        console.error("Supabase Edge Function returned an error:", result);
        throw new Error(`Email notification failed: ${result?.message || "Unknown function error."}`);
    }

    console.log("Supabase Edge Function completed successfully:", result);

    return result;
}
