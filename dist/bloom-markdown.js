Garden.fertilize([
  {
    type: 'vine',
    name: 'markdown',
    create: function create_text_field(property, value) {
      var div = document.createElement('div')
      var field = document.createElement('textarea')
      var preview = document.createElement('div')
      div.className = 'markdown'
      preview.className = 'preview'
      div.appendChild(field)
      div.appendChild(preview)
      field.setAttribute('name', property.name)
      field.value = value || ''

      var update_preview = function(e) {
        var md = window.markdownit()
        preview.innerHTML = md.render(field.value)
      }
      update_preview()

      field.addEventListener("keyup", update_preview)

      var update_preview = function(e) {
        preview.scrollTop = field.scrollTop //(field.scrollTop / field.scrollHeight) * preview.scrollHeight
      }

      var update_field = function(e) {
        field.scrollTop = preview.scrollTop //(preview.scrollTop / preview.scrollHeight) * field.scrollHeight
      }

      field.addEventListener('scroll', update_preview)
      //field.addEventListener('change', update_preview)
      preview.addEventListener('scroll', update_field)

      return {
        element: div,
        get_value: function () {
          return field.value
        }
      }
    }
  }
])
