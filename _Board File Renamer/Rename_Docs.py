# Code here is always executed
from rich.traceback import install

install()

if __name__ == '__main__':
	# Code here Executed when invoked directly (Not a module)
	import glob
	import re
	import os

	file_list = [file for file in glob.glob(f'./*.pdf')]
	for file_path in file_list:
		if re.search(r'[S|s]pecial', file_path):
			doc_type = 'Special '
		else:
			doc_type = ''

		if re.search(r'[A|a]genda', file_path):
			doc_type += 'Agenda'
		else:
			doc_type += 'Minutes'

		date_length = 8
		try:
			start_char = re.search(r'\d{8}', file_path).span()[0]
		except AttributeError:
			try:
				start_char = re.search(r'\d{6}', file_path).span()[0]
			except AttributeError:
				continue
			else:
				date_length = 6

		month = file_path[start_char: start_char + 2]
		day = file_path[start_char + 2: start_char + 4]
		year = file_path[start_char + 4: start_char + date_length]

		if len(year) == 2:
			year = f'20{year}'

		os.rename(file_path, f'./{year}-{month}-{day} - {doc_type}.pdf')
