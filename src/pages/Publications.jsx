import React from 'react';
import bibtexParse from 'bibtex-parse-js';

const bibtexString = `
@article{Valeeva2020,
  title = {The duality of firms and directors in board interlock networks: A relational event modeling approach},
  author = {D Valeeva and E M Heemskerk and F W Takes},
  url = {https://www.sciencedirect.com/science/article/pii/S0378873320300186?},
  doi = {https://doi.org/10.1016/j.socnet.2020.02.009},
  year = {2020},
  date = {2020-03-11},
  journal = {Social Networks},
  volume = {62},
  pages = {68-79},
  abstract = {The long tradition of scholarly work on corporate interlocks has left us with competing theoretical frameworks on the causes of interlock networks. Board interlocks are studied either as means to overcome the resource dependence of corporations or as a group cohesion mechanism of business elites. This contrast is due to an empirical divide of the literature where either the firms or the individuals are considered as decision-making bodies. In systematically ignoring the agency of the other group of actors, these literatures suffer from both theoretical and empirical biases in understanding the drivers of new interlocks. In this paper, we employ a relational event modeling technique that allows us to overcome this problem. The analysis of board appointments in Denmark demonstrates how in fact both personal and corporate considerations simultaneously drive the evolution of the corporate networks. The study of the duality of actors is essential for understanding the causes and consequences of corporate networks across time and space.},
  keywords = {corporate networks, elites, interlocking directorates, relational event modeling},
  pubstate = {published},
  tppubtype = {article}
}
@online{Fichtner2020,
  title = {Three financial firms could change the direction of the climate crisis – and few people have any idea},
  author = {J Fichtner and E M Heemskerk and J Petry},
  url = {https://theconversation.com/three-financial-firms-could-change-the-direction-of-the-climate-crisis-and-few-people-have-any-idea-131869},
  year = {2020},
  date = {2020-02-24},
  organization = {The Conversation},
  keywords = {capital flows, climate crisis, index funds, index providers, passive asset management, private authority, stock market indices},
  pubstate = {published},
  tppubtype = {online}
}
@online{FichtnerHeemskerkPetry2020,
  title = {Index funds might sound boring. But who decides which countries and companies to include?},
  author = {J Fichtner and E M Heemskerk and J Petry},
  url = {https://www.washingtonpost.com/politics/2020/01/08/index-funds-might-sound-boring-who-decides-which-countries-companies-include/},
  year = {2020},
  date = {2020-01-08},
  organization = {The Washington Post},
  abstract = {Index providers wield a lot of power in global finance — and that raises big political questions.},
  keywords = {capital flows, index funds, index providers, passive asset management, private authority, stock market indices},
  pubstate = {published},
  tppubtype = {online}
}
`;

const Publications = () => {
  const parsedEntries = bibtexParse.toJSON(bibtexString);

  const groupedEntries = parsedEntries.reduce((acc, entry) => {
    const year = entry.entryTags.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(entry);
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Publications</h2>
      {Object.keys(groupedEntries).sort((a, b) => b - a).map(year => (
        <div key={year} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{year}</h3>
          {groupedEntries[year].map((entry, index) => (
            <div key={index} className="mb-4 p-4 bg-white shadow-md rounded-md">
              <p className="mb-2"><strong>Author(s): </strong>{entry.entryTags.author.split(' and ').join('; ')}</p>
              <h4 className="text-xl font-semibold mb-2">{entry.entryTags.title} 
              {entry.entryTags.tppubtype && <span className="ml-2 text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">{entry.entryTags.tppubtype.replace('_', ' ')}</span>}
              </h4>
              <p className="mb-2">
                {entry.entryTags.journal ? 
                `${entry.entryTags.journal}, ${entry.entryTags.volume ? `${entry.entryTags.volume},` : ''} pp. ${entry.entryTags.pages}, ${entry.entryTags.year}.` :
                `${entry.entryTags.organization ? entry.entryTags.organization : ''}, ${entry.entryTags.year}.`}
              </p>
              <div className="flex space-x-4">
                {entry.entryTags.abstract && <a href="#" className="text-blue-600 hover:underline">Abstract</a>}
                <a href={entry.entryTags.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Links</a>
                <a href="#" className="text-blue-600 hover:underline">BibTeX</a>
              </div>
              <p className="mt-2"><strong>Tags: </strong>{entry.entryTags.keywords ? entry.entryTags.keywords.split(', ').map((keyword, i, arr) => (
                <span key={i} className="text-blue-600 hover:underline">{keyword}{i < arr.length - 1 ? ', ' : ''}</span>
                )) : 'None'}
            </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Publications;
