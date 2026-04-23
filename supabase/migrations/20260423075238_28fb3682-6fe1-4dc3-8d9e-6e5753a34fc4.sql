-- Fix function search path
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Restrict bucket listing: still allow direct file fetch via public URL (which uses signed object route),
-- but disallow broad listing through storage.objects SELECT.
drop policy if exists "Public can view product images" on storage.objects;

-- Allow only authenticated admins to list/select via storage.objects
create policy "Admins can list product images"
on storage.objects for select
to authenticated
using (
  bucket_id = 'product-images'
  and public.has_role(auth.uid(), 'admin')
);