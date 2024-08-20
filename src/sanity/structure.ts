import type {StructureResolver} from 'sanity/structure';
import { useEffect, useState } from 'react';
import { useClient } from 'sanity';

const documentCount = async (schemaType: string) => {
  const client = useClient();
  const count = await client. fetch<number>(`count(*[_type == schemaType])`, {
    schemaType,
  });

  return count;
}



// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Milestones')
    .items([
      S.documentTypeListItem('post').title(`Posts`),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
      ),
    ])
