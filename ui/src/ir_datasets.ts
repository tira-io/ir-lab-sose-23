import * as topics from './topics.json'
import * as example_documents from './example-documents.json'
import * as runs from './run_overview.json'

export default topics

let data_access = {
'databases': {
    'argsme/2020-04-01/touche-2020-task-1': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/argsme/argsme.db',
    'argsme/2020-04-01/touche-2021-task-1': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/argsme/argsme.db',
    'msmarco-passage/trec-dl-2019/judged': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ms-marco/ms-marco.db',
    'msmarco-passage/trec-dl-2020/judged': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ms-marco/ms-marco.db',

    'ir-lab-jena-leipzig-wise-2023/jena-topics-20231026-test': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ir-lab-jena-leipzig-wise-2023/ir-lab-jena-leipzig-wise-2023.db',
    'ir-lab-jena-leipzig-wise-2023/leipzig-topics-20231025-test': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ir-lab-jena-leipzig-wise-2023/ir-lab-jena-leipzig-wise-2023.db',
    'ir-lab-jena-leipzig-wise-2023/validation-20231104-training': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ir-lab-jena-leipzig-wise-2023/ir-lab-jena-leipzig-wise-2023-validation.db',
    'ir-lab-jena-leipzig-sose-2023/iranthology-20230618-training': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ir-lab-jena-leipzig-sose-2023/ir-lab-jena-leipzig-sose-2023.db'

  },
  'documents': {
    'argsme/2020-04-01/touche-2020-task-1': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/argsme/documents.jsonl',
    'argsme/2020-04-01/touche-2021-task-1': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/argsme/documents.jsonl',

    'msmarco-passage/trec-dl-2019/judged': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ms-marco/documents.jsonl',
    'msmarco-passage/trec-dl-2020/judged': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ms-marco/documents.jsonl',
    'antique/test': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/antique/documents.jsonl',
    'cranfield': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/cranfield/documents.jsonl',
    'vaswani': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/vaswani/documents.jsonl',

    'ir-lab-jena-leipzig-wise-2023/jena-topics-20231026-test': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ir-lab-jena-leipzig-wise-2023/inputs/jena-topics-20231026-test/documents.jsonl',
    'ir-lab-jena-leipzig-wise-2023/leipzig-topics-20231025-test': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ir-lab-jena-leipzig-wise-2023/inputs/jena-topics-20231026-test/documents.jsonl',
    'ir-lab-jena-leipzig-wise-2023/validation-20231104-training': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ir-lab-jena-leipzig-wise-2023/inputs/validation-20231104-training/documents.jsonl',
    'ir-lab-jena-leipzig-sose-2023/iranthology-20230618-training': 'https://files.webis.de/data-in-progress/dataset-explorer-in-progress/ir-lab-jena-leipzig-sose-2023/inputs/documents.jsonl'
  }
}

export { data_access, example_documents, runs }