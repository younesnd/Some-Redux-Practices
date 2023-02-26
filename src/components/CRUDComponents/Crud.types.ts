export type Icolumn = {
    //Used to get string data from the each row object
    field: string //This field can have a full stop(.) will allow us to read further into nested objects

    //This will be used to display in the table heading.
    use: string

    //Indicates that of this column should be used to search (optional). defaults to true.
    use_in_search?: boolean

    //Indicates If this property should be used displayed in the table header (optional). defaults to true.
    use_in_display?: boolean

    //Indicates if this field can be exported on the CSV (optional) defaults to true.
    use_in_export?: boolean
}
export type Icolumns = Icolumn[]

type Irow = {
    [key: string]: any
}

export type Irows = Irow[]

export type Iprop = {
    rows: Irow[]
    columns: Icolumn[]
    per_page?: number
    table_header?: string
    no_content_text?: string
    debounce_search?: number
    show_search?: boolean
    should_export?: boolean
    export_text?: string
    bulk_select_options?: string[]
    bulk_select_button_text?: string
    export_csv_file?: string
    striped?: boolean
    bordered?: boolean
    hovered?: boolean

    row_render?: (row: Irow, col: Icolumn, display_value: string) => string
    on_search?: (search_word: string, result?: Irow[] | []) => void
    export_modify?: (row: Irow, col: Icolumn, display_value: string) => string
    on_bulk_action?: (selected_option: string, selected: Irow[]) => void

    //This will be discussed properly in the course of the documentation
}