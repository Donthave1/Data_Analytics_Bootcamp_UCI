class Cleaner():
    def __init__(self, data_frame):
        self.data_frame = data_frame
        self.headers = self.get_headers()
        self.columns = self.get_columns()

    def clean_dataframe(self):
        #renaming headers
        header = self.get_first_column()
        self.data_frame = self.data_frame.rename(columns={header:'Labels'})
        self.data_frame = self.data_frame[self.columns]

        # drop NA values
        income = self.data_frame.dropna()
        income = income.set_index('Labels')

        #Deleting rows with %s
        income = self.delete_percents(income)

        #replace dashes
        income = self.replace_dashes(income)

        #make negative
        income = self.make_negative(income)

        #replace commas
        income = self.replace_commas(income)
    
        return income

    def delete_percents(self, data_frame):
        data_frame['percentage'] = ''
        data_frame['percentage'][data_frame[self.columns[1]].str.contains('%')] = 'percentage'
        data_frame['percentage'][data_frame[self.columns[2]].str.contains('%')] = 'percentage'
        data_frame = data_frame[data_frame['percentage'] != 'percentage']
        data_frame = data_frame.drop(['percentage'],axis=1)
        return data_frame

    ##finding first column name to rename-
    def get_first_column(self):
        return self.headers[0][0]

    def get_headers(self):
        return [self.data_frame.columns.values]

    def get_columns(self):
        columns = ['Labels']
        for column in range(1, 6):
            columns.append(self.headers[0][column])
        return columns
    
    def make_negative(self, data_frame):
        for x in range(1, 6):
            data_frame[self.columns[x]] = data_frame[self.columns[x]].str.replace('\(', '-')
            data_frame[self.columns[x]] = data_frame[self.columns[x]].str.replace('\)', '')
        return data_frame

    def replace_commas(self, data_frame):
        for x in range(1, 6):
            data_frame[self.columns[x]] = data_frame[self.columns[x]].str.replace('\,', '')
        return data_frame

    def replace_dashes(self, data_frame):
        for x in range(1, 6):
            data_frame[self.columns[x]][data_frame[self.columns[x]].str.contains('-')] = "0"
        return data_frame